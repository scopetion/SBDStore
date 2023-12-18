import { styled } from "styled-components";

export default styled.div`
    .container-header{
        width: 80%;
        margin:0 auto;
        padding: 2em 0 1em 0;
        display: flex;
        justify-content:space-between;
        .font-box{
            padding: 2em 0 0 0;
            .nav-title{
                
font-family: Roboto, Roboto;
font-weight: 500;
color: #FFFFFF;
margin-left:2em;

            }
            .active{
    color: rgba(204, 138, 53, 1);
    font-size: 18px;
font-family: Roboto, Roboto;
font-weight: 600;
line-height: 23px;
}
            .selected{
                color: rgba(204, 138, 53, 1);
            }
        }
    }

    @media screen and (max-width: 1920px){
        .nav-title{
                font-size: 20px;
                line-height: 23px;
            }
    }
    @media screen and (max-width: 1440px){
        .nav-title{
                font-size: 20px;
                line-height: 23px;
            }
    }
    @media screen and (max-width: 450px){
        .nav-title{
                font-size: 20px;
                line-height: 23px;
            }
    }
`