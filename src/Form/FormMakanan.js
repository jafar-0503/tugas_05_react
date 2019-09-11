import React, {Component} from 'react';

class FormMakanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pesanan: "",
      jumlah: ""
    };

  // deklarasi bind
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChangeJumlah = this.handleChangeJumlah.bind(this);
  this.pesanan = React.createRef();
}

  // method handlechange, handleChangeJumlah, handleSubmit
  handleChange(e){
    this.setState({ pesanan: e.target.pesanan});
  }

  handleChangeJumlah(e){
    this.setState({ jumlah: e.target.jumlah});
  }

  handleSubmit(e){
    e.preventDefault();
    alert(
      "Pesanan Anda adalah : " +
        this.state.pesanan +
        " | Jumlah Pesanan : " +
        this.state.jumlah
    );

    this.setState({ pesanan: "", jumlah: ""});
    this.pesanan.current.focus();
  }

  render(){
    return(
      <div>
        <center>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type='text'
              value={this.state.pesanan}
              ref={this.pesanan}
              placeholder="Masukan Pesanan Anda"
              />

            <input
              type="number"
              value={this.state.jumlah}
              onChange={this.handleChangeJumlah}
              placeholder="Masukan Jumlah Pesanan"
            />
            <br/> <br/>

            <input
              type='submit' value='Pesan'
            />
        </form>
        </center>
      </div>
    );
  }
}

export default FormMakanan;
