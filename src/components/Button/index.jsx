import { ButtonRed, ButtonWite,  } from "./styles";

export default function Button({ children, red, ...rest }) {




    return (
        <>{red ? (<ButtonRed {...rest} >{children}</ButtonRed>) : (<ButtonWite {...rest}>{children}</ButtonWite>)}
            

        </>
    )

}