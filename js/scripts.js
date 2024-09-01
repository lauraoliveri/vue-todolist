
  const { createApp } = Vue

  createApp({
    data() {
        return {
            Todolist: [
                {task:"Comprare pane e latte", done: false},
                {task: "Andare a ritirare il pacco Amazon", done: true},
                {task: "Rispondere alle email di lavoro", done: true},
                {task:"Completare esercizio di Boolean", done: true},
                {task: "Fare skincare e maschera viso", done: false},
                {task: "Mettere nuovi articoli su Vinted", done: false}
            ]

        }
     
    },
    methods: {
        RemoveTask (i) {
            this.Todolist.splice(i, 1)
        }
    }
  }).mount('#app')

