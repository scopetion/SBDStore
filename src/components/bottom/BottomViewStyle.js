import { styled } from "styled-components";

export default styled.div`

    .bottom{
        width: 80%;
        height: 100px;
        margin:8em auto;
        background: 1B1B1B;
        .bottom-box{
            .left{
                float:left;
                p{
font-family: Roboto, Roboto;
font-weight: 500;
color: #8A8080;
                }
            }
            .right{
                float:right;
                .right-text{
                    span{
font-family: Roboto, Roboto;
font-weight: 600;
color: #8A8080;
                }
                }
                .right-icon{
                    float: right;
                    img{
                        margin:2em 1.5em 0 0;
                    }
                }
              
            }
        }
    }

    @media screen and (max-width: 1920px){
        .bottom{
            .bottom-box{
                .left{
                    p{
                        margin: 1em 0;
                    font-size: 18px;
                    line-height: 19px;
                    
                    }
                }
                .right{
                    .right-text{
                    span{
                        margin: 0 1.5em;
                    font-size: 18px;
                    line-height: 23px;
                    
                    }
                     }
                }
            }
        }
    }

    @media screen and (max-width: 1440px){
        .bottom{
            .bottom-box{
                .left{
                    p{
                    font-size: 18px;
                    line-height: 19px;
                    
                    }
                }
            }
        }
    }

    @media screen and (max-width: 450px){
        .bottom{
            .bottom-box{
                .left{
                    p{
                    font-size: 18px;
                    line-height: 19px;
                    
                    }
                }
            }
        }
    }
`
