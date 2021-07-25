import React, { useState } from 'react';
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const Card = () => {

    const [avatar, setAvatar] = useState("")
    const hiddenFileInput = React.useRef(null);

    const handleClick = e => {
        hiddenFileInput.current.click()
    }

    const handleChangeImage = e => {    
        const file = e.target.files[0];
        setAvatar({
            avatar: URL.createObjectURL(file)
        });
    
    }
    return (
        <div>

            <form className="form-estilizado">
            <div>
                 <img className="imagem-user" src={avatar.avatar} alt={avatar.avatar} />
            </div>
           
            <IconButton className="imagem-icon" onClick={handleClick}
                color="primary"
                aria-label="upload picture"
                component="span"
                
            >

                <PhotoCamera />

              

            </IconButton>

              <input className="input-invisibel"
                type="file"
                name="photo"
                ref={hiddenFileInput}
                onChange={handleChangeImage.bind(avatar)}
            />
                
            </form>


        </div>
    )
}

export default Card;