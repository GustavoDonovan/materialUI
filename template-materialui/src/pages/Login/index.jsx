import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Grid } from '@mui/material';

const Login = () => {
    const [login, setLogin, senha, setSenha] = useState('');
    return (


        <><Grid item xs={12}>
        <FormControl fullWidth>
          <Input id="login_nome" aria-describedby="login_nome_helper_text" value={login}
            onChange={e => { setLogin(e.target.value); } } />
          <FormHelperText id="login_nome_helper_text">Login</FormHelperText>
        </FormControl>
      </Grid><Grid item xs={12}>
          <FormControl fullWidth>
            <Input id="login_senha" aria-describedby="login_senha_helper_text" value={senha}
              onChange={e => { setSenha(e.target.value); } } />
            <FormHelperText id="login_senha_helper_text">Senha</FormHelperText>
          </FormControl>
        </Grid></>
          

    );
}

export default Login;