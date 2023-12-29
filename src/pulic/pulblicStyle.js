
import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

body {
position: relative;
background:#fff;
/* height: inherit; */
}

.App {
position: relative;
z-index: 2;

}

.nav-item{
    color: white;
    
}
.active{
        color: #CC8A35;
    }
.home-router {
    background: rgba(20, 24, 62, 1);
position: relative;
z-index: 1;
left: 0;
-webkit-background-clip: text;
    width:100%;
}
.box-title{
    font-size: 30px;
    font-family: Roboto, Roboto;
font-weight: bold;
color: #FFFFFF;
line-height: 39px;
margin-bottom: 1em;
}
        .super-form{
            background: #1C1C1C;
            box-shadow: 0px 5px 20px 5px rgba(0,0,0,0.2);
            border-radius: 20px 20px 20px 20px;
            border: 1px solid rgba(255,255,255,0.15);
            margin: 2em 0;
        }
        
        .super-line,.super-list{
            display: flex;
            justify-content: flex-start;
        }
        .super-line{
            border-radius: 20px 20px 20px 20px;
            display: flex;
            padding:2.5em 2em;
            &:nth-child(odd){
                background: rgba(28, 28, 28, 1);
            }
            &:nth-child(even){
                background: rgba(62, 62, 62, 1);
            }
            .col{
                font-family: Roboto, Roboto;
                font-weight: 600;
                color: #8A8080;
            }
        }

        .super-list{
            display: flex;
            padding:1.5em 2em;
            &:nth-child(odd){
                background: rgba(28, 28, 28, 1);
            }
            &:nth-child(even){
                background: rgba(62, 62, 62, 1);
            }
            .col{
font-family: Roboto, Roboto;
font-weight: bold;
color: #FFFFFF;
              
            }
            .address{
                    color: rgba(204, 138, 53, 1);
                }
        }

        .page{
            text-align:center;
            margin:2em 0;
        }
@font-face{
    font-family: 'Roboto-Bold';
    src : url('./Roboto-Bold.ttf');
}
@font-face{
    font-family: 'RussoOne-Regular';
    src : url('./RussoOne-Regular.ttf');
}
@font-face{
    font-family: 'RobotoMedium';
    src : url('./RobotoMedium.ttf');
}
@font-face{
    font-family: 'RussoOneRegular';
    src : url('./RussoOneRegular.ttf');
}
@font-face{
    font-family: 'Volkhov-Bold';
    src : url('./Volkhov-Bold.ttf');
}

`