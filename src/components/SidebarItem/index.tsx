import { Link } from "react-router-dom";
import * as C from "./styles";
import {IoMdPerson, IoMdBook, IoMdMail, IoMdDoneAll} from "react-icons/io";

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const SidebarItem = ({title,description,icon,path,active}:Props) => {
    return(
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === 'profile' && (
                        <IoMdPerson className="icon"/>
                    )}
                    {icon === 'book' && (
                        <IoMdBook className="icon"/>
                    )}
                    {icon === 'mail' && (
                        <IoMdMail className="icon"/>
                    )}
                    {icon === 'confirm' && (
                        <IoMdDoneAll className="icon"/>
                    )}

                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    );
}