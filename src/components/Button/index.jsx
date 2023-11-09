import { ButtonRed, ButtonWite,  } from "./styles";

export default function Button({ children, red }) {




    return (
        <>{red ? (<ButtonRed>{children}</ButtonRed>) : (<ButtonWite>{children}</ButtonWite>)}
            )

        </>
    )

}