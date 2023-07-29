<template>
  <div class="container">
    <h1>Agenda Rivanildo</h1>

    <hr />

    <form-contato 
     v-on:add-contato="salvarContato" 
     v-on:atualiza-contato="salvarAlteracoesContato" 
    :contato="dadosedite">
    </form-contato>

    <div class="list-group">
      <p v-if="numContatos <= 0">Adicione um contato na agenda...</p>
      <h5 v-else>Há {{ numContatos }} contatos na agenda.</h5>

      <div class="list-group-item" v-for="(contato, index) in contatos" v-bind:key="index">
        <span class="nome_class">Nome: <strong>{{ contato.nome }}</strong></span>
          <p>
            <span class="telefone_class">
              Telefone: <strong>{{ contato.telefone }}</strong>
            </span>
          </p>
          <div>
            
            <a href="#" title="Editar"  v-on:click.prevent="editarContato(index)"  class="btn btn-primary">
              Editar
            </a>

            <a href="#" title="Excluir" v-on:click.prevent="excluirContato(index)"  class="btn btn-danger">
              Excluir
            </a>

        </div>
      </div>
    </div>

    <hr />
  </div>
</template>

<script>
import FormContato from './FormContato.vue';
  

  export default {
  components: { FormContato },

    data() {
      return {
        contatos: [],
        contatoSelecionado: null,
        dadosedite: null
      
      }
    },
    methods: {
      salvarContato(contato) {
        this.contatos.push(contato);
      },

      editarContato(index) {
        this.contatoSelecionado = index;
        this.dadosedite = this.contatos[index];
      },


      salvarAlteracoesContato(contato) {
        this.contatos[this.contatoSelecionado] = {...contato};
      },


      excluirContato(index) {
        this.contatos.splice(index, 1);
      }


    },
    computed: {
      numContatos() {
        return this.contatos.length;
      }
    },
    watch: {
      contatos(val) {
        console.log('val', val)
      }
    }
  }
</script>
