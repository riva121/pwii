<template>
  <div class="form-contato form-group">
    <p>
      <input placeholder="Nome" type="text" name="nome" class="form-control"
             v-model="nome" />
    </p>
    <p>
      <input placeholder="Telefone" name="telefone" class="form-control"
             v-model="telefone" />
    </p>
    <button v-on:click="adicionarContato" type="submit" class="btn btn-primary">
      {{ contatoEditando ? 'Atualizar' : 'Salvar' }}
    </button>

  
  </div>
</template>

<script>
  export default {

    props: {
      contato: {
        type: Object,
        default: null
        },
    },


    data() {
      return {
        nome: '',
        telefone: '',
        contatoEditando: false
      }
    },


    watch: {
        contato: {
          handler(val) {
            this.nome = val.nome;
            this.telefone = val.telefone;
            this.contatoEditando = true;
          },
        },

      },


    methods: {

      adicionarContato() {
        if (this.nome.trim() === '' || this.telefone.trim() === '') {
          console.log("Vazio!")
          return;
        }

       if(this.contatoEditando) {
          
          this.$emit('atualiza-contato', {
            nome: this.nome,
            telefone: this.telefone,
          });

       } else {

          this.$emit('add-contato', {
            nome: this.nome,
            telefone: this.telefone,
          });

       }

       this.contatoEditando = false;
       this.nome = '';
       this.telefone = '';
      
      }
    },


  }
</script>
