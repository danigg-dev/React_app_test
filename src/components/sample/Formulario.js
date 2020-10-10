import React, { Component } from "react";

class Formulario extends Component {

    nombreRef = React.createRef();
    apellidoRef = React.createRef();
    bioRef = React.createRef();
    genHombreRef = React.createRef();
    genMujerRef = React.createRef();
    genOtroRef = React.createRef();

    state = {
        user: {}
    }

    recibirFormulario= (e) => {
        e.preventDefault();

        var genero = 'hombre';
        if(this.genHombreRef.current.checked){
            genero = this.genHombreRef.current.value;
        }else if (this.genMujerRef.current.checked){
            genero = this.genMujerRef.current.value
        }else{
            genero = this.genOtroRef.current.value
        }

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidoRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero
        }

        this.setState({
            user: user
        })
        console.log("formulario enviado")
        console.log(user)
    }
  render() {
    if(this.state.user.nombre){
        var user = this.state.user;
    } 

    return (
      <React.Fragment>
        {/* mostrar datos del formulario */}
        {this.state.user.nombre &&
            <div>
                <p>Nombre: <strong>{user.nombre}</strong></p>
                <p>Apellidos: <strong>{user.apellidos}</strong></p>
                <p>Bio: <strong>{user.bio}</strong></p>
                <p>Genero: <strong>{user.genero}</strong></p>
            </div>
        }
        {/* crear un formulario */}
        <form className="mid-form" onSubmit={this.recibirFormulario}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" ref={this.nombreRef} />
          </div>

          <div className="form-group">
            <label htmlFor="apellidos">Apellidos</label>
            <input type="text" name="apellidos" ref={this.apellidoRef}/>
          </div>

          <div className="form-group">
            <label htmlFor="bio">Biografia</label>
            <textarea name="bio" ref={this.bioRef}></textarea>
          </div>

          <div className="form-group radibuttons">
            <input type="radio" name="genero" value="hombre" ref={this.genHombreRef}/> Hombre
            <input type="radio" name="genero" value="mujer" ref={this.genMujerRef}/> Mujer
            <input type="radio" name="genero" value="otro" ref={this.genOtroRef}/> Otro
          </div>

          <div className="clearfix"></div>

          <input type="submit" value="Enviar" className="btn btn-success" />
        </form>
      </React.Fragment>
    );
  }
}

export default Formulario;