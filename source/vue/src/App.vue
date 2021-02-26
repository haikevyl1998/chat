<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-center min-vh-100">
        <div class="col-10 col-md-8 col-lg-6">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title mb-1">Messages Using VueJs</h3>
              <span class="card-text">{{ Messages.length }} messages</span>
            </div>
            <div class="card-body ">
              <div class="w-100">
                <div v-for="mess in Messages" :key="mess.key" class="w-100 d-flex justify-content-start">
                  <div class="msg mb-2">
                    <span class="msg-user">{{ mess.username }}</span>
                    <span class="msg-body">
                      {{ mess.content }}
                    </span>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="card-footer">
              <form @submit.prevent="send">
                <input
                  v-show="username == null"
                  v-model="inputUsername"
                  type="text"
                  class="form-control"
                  placeholder="Username"
                />
                <div class="input-group">
                  <input
                    v-model="inputMess"
                    type="text"
                    class="form-control"
                    placeholder="Typing..."
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary">send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from './FirebaseConfig'
import 'firebase/database'

export default {
  name: "App",
  mounted(){
    this.username = localStorage.getItem('username') ?? null
    this.MessagesRef = firebase.database().ref('messages')

    this.MessagesRef.get().then((snapshot) => {
      let data = []
      snapshot.forEach(item => {
        data.push({
          key: item.key,
          username: item.val().username,
          content: item.val().content
        })
      });
      this.Messages = data
    })

    this.MessagesRef.on('child_added', (snapshot) => {
        this.Messages.push({
          key: snapshot.key,
          username: snapshot.val().username,
          content: snapshot.val().content
        })
    })
  },
  data(){
    return {
      inputUsername: '',
      username: '',
      inputMess: '',
      MessagesRef: null,
      Messages: [],
    }
  },
  methods: {
    send(){
      if(this.username != null){
        this.pushMess()
      }else if(this.inputUsername.trim().length > 4){
        this.username = this.inputUsername
        localStorage.setItem('username', this.username)
        this.pushMess()
      }else{
        alert('username is required!,')
      }
    },
    pushMess(){
      this.inputMess.trim().length > 0 ? 
        this.MessagesRef.push({
          username: this.username,
          content: this.inputMess
        }) : alert('Message content is required!,')
      this.inputMess = ''
    }
  }
};
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a {
    text-decoration: none !important;
}
ul, li {
    list-style: none !important;
}
.form-control, .btn {
    box-shadow: none !important;
    border-radius: 0 !important;
    outline: none !important;
}
html body #app {
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    font-size: 14px;
    font-family: "Roboto", sans-serif !important;
    line-height: 1.5;
    font-weight: 200;
    background-color: #dfe6e9;
    overflow-y: hidden;
}
.card {
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.2);
}
.card-header, .card-footer {
    background-color: transparent;
}
.card-body {
  height: 350px;
  overflow-y: auto !important;
}
.msg {
    padding: 5px 10px;
    border-radius: 15px;
    background: #3498db;
    color: white;
    line-height: 1.3;
}
.msg-user {
    text-transform: capitalize;
    font-weight: 900;
    padding-right: 3px;
}
.msg-body {
    font-size: 0.96rem;
}
</style>
