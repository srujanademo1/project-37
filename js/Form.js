class Form
{
    constructor()
    {
         this.title = createElement("h2");
        this. input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
    }
    hide()
    {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display()
    {
        
        this.title.html("car racing game");
       this. title.position(330,0);

      

        this.input.position(330,160);
        this.button.position(350,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            player.name = this.input.value();
            
            playerCount +=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            
           this.greeting.html("hello "+player.name)
            this.greeting.position(330,160)
        });
    }
}