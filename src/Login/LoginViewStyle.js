import {styled} from 'styled-components';
import background from '../imgs/background.png'
import Bg from '../imgs/bg.png'

export default styled.div`

    .page1{
        background: url("${Bg}");
    background-size: cover;
    height: 745px;
    padding: 0 10%;
            .con-header{
                .app-btn{
           float:right;
        } 
            }
            .con-content{
color: #181E4B;


            }
            .app-btn{
           float:left;
        } 
        }
     
    .logo{
        float: left;
        width: 160px;
    }
.cont-title{
    font-family: Volkhov, Volkhov;
font-weight: bold;
color:  #181E4B;
}
.con-title{
        text-align:center;
        font-family: Volkhov, Volkhov;
font-weight: bold;
color:  #181E4B;
    }
.page2{
    padding: 0 10%;
    
}

.con-boxes{
    display:flex;
    justify-content:space-between;
    padding: 1em ;
    .con-box{
        padding: 1em;
        box-shadow: 0px 2px 3px 0px rgba(0,0,0,0), 0px 8px 7px 0px rgba(0,0,0,0.01), 0px 20px 13px 0px rgba(0,0,0,0.01), 0px 39px 25px 0px rgba(0,0,0,0.01), 0px 65px 47px 0px rgba(0,0,0,0.02), 0px 100px 80px 0px rgba(0,0,0,0.02);
border-radius:36px;
width: 30%;

text-align:center;
color: rgba(0,0,0,.85);;
.box-title{
    margin-top:1em;
font-family: Roboto, Roboto;
font-weight: bold;
color: #1E1D4C;
}
.box-content{
font-family: Roboto, Roboto;
font-weight: 500;
}
.page-img1{
    width: 50px;
}
    }
}

.page3{
    padding: 0 10%;
    display: flex;
    justify-content:space-between;
}
.page4{
    padding: 0 10%;
    display: flex;
    justify-content:space-between;
}
.page5{
    padding: 0 10%;
    display: flex;
    justify-content:space-between;
}

.page6{
    padding: 0 10%;
    .page6-box{
        width: 80%;
        margin:0 auto;

    }
}
.content-bold,.box-content{
    color:  #181E4B;
}
.page7{
    padding: 0 25%;
    .page7-boxes{
        
        .page7-box{
       width: 100%;
        display: inline-flex;
        margin-top:2em;
        justify-content:space-between;
        .icon{
            width: 30px;
            margin-top:1em
        }
            img{
                width: 18%;
                margin-left:2em;
            }
        }
    }
}
        
    @media screen and (max-width: 1920px){

        .page1{
            .con-header{
                padding-top:2em;
                height: 10em;
            }
            .con-content{
                margin-top:1em;
                .cont-title{
                    font-size: 84px;
                    line-height: 120px;
                margin-top:1em;
                }
                
                .box-content{
                    margin-top:-60px;
                }
            }
        }
    .app-btn{
           width: 160px;
           height:90px;
           margin-left:-1.5em;
           margin-top: 1em;
        }   
    .logo{
        width: 160px;
    }

      
    .con-boxes{
    .con-box{
        
.box-title{
    font-size: 30px;
line-height: 35px;
  }


}
    }

.con-title{
        font-size: 50px;
    }
    .box-content{
    font-size: 20px;
line-height: 26px;
  }

    .content-bold{
                font-size: 26px;
font-family: Roboto, Roboto;
font-weight: bold;
line-height: 32px;
            }
.page3{
    margin:3em 0em;
    .con-title{
        text-align:left;
    }
    .box3-left{
        width: 50%;
    
    }
    .box3-right{
        width:50%;
        padding:0 1em 0em 0em;
    }
}
.page4{
    margin:3em 0em;
    .con-title{
        text-align:left;
    }
    .box3-right{
        width: 55%;
    }
    .box3-left{
        width:45%;
        padding:0 1em 0em 0em;
    }
}
.page5{
    margin:3em 0em;
    .con-title{
        text-align:left;
    }
    .box3-right{
        width: 50%;
        padding: 3em 4em 0em 8em;
    }
    .box3-left{
        width:50%;
        padding-right:3em ;
    }
}

    }
@media screen and (max-width: 1440px){

    
}
        
`