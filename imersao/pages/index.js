//importar arquivo
import appConfig from '../config.json';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
//roteamento de páginas (hook)
import { useRouter } from 'next/router';

//props-> é utilizado para usar as propriedades nessa função
//usar o propos.children para pegar o conteudo
//se ele reclamar de apenas um elemento, envolver em uma div ou <> </>
function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>

            {/* esse css só faz parte desse componente */}
            <style jsx>{`
                ${Tag}{
                    color:${appConfig.theme.colors.neutrals[999]};
                    font-size:24px;
                    font-weight:600;
                }
            `}
            </style>
        </>
    );
}

//componente react
// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )

// }
// export default HomePage

export default function PaginaInicial() {
    // const username = 'Andre-Honorato';
    const [username, setUsername] = React.useState('');
    const roteamento = useRouter();
    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.neutrals[999],
                    backgroundImage: 'url(https://64.media.tumblr.com/8eb6935c7349e6667f05e8af43aa174e/ac4e6daf71d6ab6b-73/s1280x1920/1dc8ac1124e3fe7368d2501a8b31924eec91e3cc.gifv)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        borderColor: appConfig.theme.colors.neutrals['000'],
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[100],
                        //background: 'rgba(0, 0, 0, 0.9)',
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={(infosDoEvento) => {
                            infosDoEvento.preventDefault();
                            //window.location.href = '/chat';
                            roteamento.push(`/chat?username=${username}`);
                            console.log("Enviou o form")
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Titulo tag="h2">Boas vindas de volta!</Titulo>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[999] }}>
                            {appConfig.name}
                        </Text>


                        {/* <input
                            type="text"
                            value={username}
                            onChange={function (event) {
                                //onde está a variavel?
                                const valor = event.target.value;
                                //trocar valor da variavel
                                setUsername(valor);

                            }} /> */}

                        <TextField
                            value={username}
                            onChange={function (event) {
                                //onde está a variavel?
                                const valor = event.target.value;
                                //trocar valor da variavel
                                setUsername(valor);
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />

                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '250px',
                            padding: '16px',
                            //backgroundColor: appConfig.theme.colors.neutrals[800],
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}

                            src={username.length >= 3 && username.length <= 50 ? `https://github.com/${username}.png` : 'https://cdn-icons-png.flaticon.com/512/25/25231.png'}

                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}