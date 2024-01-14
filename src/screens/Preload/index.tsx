import React, { useState } from "react";
import { Container, Title } from './styles';

import { Loading } from "../../components/Loading";
import Icon from "../../assets/snow.svg";

export function Preload(){
    const [ isLoading, setisLoading ] = useState(true);

    return(
        <Container>
            <Icon  />
            <Loading/>
        </Container>
    );
}
