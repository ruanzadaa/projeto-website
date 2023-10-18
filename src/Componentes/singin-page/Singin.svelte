<body>
  <div>
    <div class="abc">
      <h1>Last Option</h1>
    </div>
      <form>
          <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              <div id="emailHelp" class="texto-email">Nunca compartilharemos seu e-mail com mais ninguém.</div>
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
              <span id="exampleInputPassword1" class="form-text">Deve ter de 8 a 20 caracteres</span>
              <h6>Cadastre-se</h6>
          </div>
          <button href="" class="btn btn-primary">ok</button>
          <a href="PaginaInicial.svelte" class="btn btn-primary">Visitante</a>
      </form>
      
  </div>
    
      
</body>



<style>
    body {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 150vh; */
    margin-top: 10px;
    background-color: #340239; /* Código hexadecimal para azul claro */
    
}

.abc {
    text-align: center;
    color:#fff;
    font-size: 30px;
    
    
    
}

/* Estilos para o formulário */
form {
    background-color: #7715b5;
    padding: 23px;
    border: 2px solid #2d064f;
    border-radius: 5px;
    text-align: center;
    max-width: 350px; /* Define a largura máxima do formulário */
    margin-top: center;
    margin-right: center;
    
    
}
/* Estilos para os rótulos e campos de entrada */
.mb-3 {
    margin-bottom: 15px;
}

.form-label {
    display: block;
    font-weight: bold;
    
}

.form-control {
    width: 100%;
    padding: 8px;
    border: 1px solid #730a97;
    border-radius: 5px;
   
}

.texto-email {
    color: #000000;
}

/* Estilos para o botão de envio */
.btn-primary {
    margin-top: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    
}
</style>