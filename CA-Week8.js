/*
Create a menu app as seen in this week’s video. 
What you create is up to you as long as it meets the 
following requirements:

Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, 
and delete elements.
*/




//Declaring a class 'Wrestler' with two properties "name" and "finisher"

class Wrestler {
    constructor(name, finisher) {
        this.name = name;
        this.finisher = finisher;
    }
    describe() {
        return `${this.name} will win when he uses the ${this.finisher}! `;
    }
    


//Method of class 'Wrestler' adding results to array 'wrestlers'

    addWrestler(wrestler) {
        if (wrestler instanceof Wrestler) {
            this.wrestlers.push(wrestler);
        } else {
            throw new Error('You can only add an instance of Wrestler.argument is not a wrestler: ${wrestler}');
        }
    }
    describe() {
        return `${this.name} is entering the Royal Rumble!`;
    }
}



//Declaring new class 'Menu' with array 'wrestlers' as an object

class Menu {
    constructor() {
        this.wrestlers = [];
        this.selectedWrestler = null
    }



//Starting the application

    start() {
        let selection = this.showMainMenuOptions();
        while (selection) {



//Main menu options and what to do based on user selection value

            switch(selection) {
                case '1' :
                    this. createWrestler();
                    break
                case '2' :
                    this.viewWrestler();
                    break;
                case '3' :
                    this.deleteWrestler();
                    break;
                case '4' :
                    this.displayWrestlers();
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }



//Closing message

        alert('Do not try this at home!');
    }



//Options for main menu to "Create", "View", "Delete", and "Display" (Roster)

    showMainMenuOptions() {
        return prompt(`
        The following contest is the Royal Rumble match!
            0) Exit
            1) Create a New Wrestler
            2) View Wrestlers
            3) Delete a Wrestler
            4) Roster
        `)
    }



//Options for 'View Wrestler' selection

    viewWrestlerMenuOptions(wrestlerInfo) {
        return prompt(`
            0) Main Menu
            1) Change Wrestler
            2) Create a New Wrestler
            3) Delete a Wrestler
            -----------------------------
            Name     Finisher
            ${wrestlerInfo}
        `);
    }
    


//Displays the wrestlers names using the array "wrestlers"

    displayWrestlers() {
        let wrestlerString = ' ';
            for (let i = 0; i < this.wrestlers.length; i++) {
                wrestlerString += i+ ')' + this.wrestlers[i].name + '\n ';
            }
            alert(wrestlerString);
    }



//Create option asking for "name" and "finisher"

    createWrestler() {
        let name = prompt('Whats your name, kid?');
        let finisher = prompt ('Whats your finishing move?')
       
//Adding new created name to the array of wrestlers
        this.wrestlers.push(new Wrestler(name, finisher));
        alert(`We have a new enterant in the Royal Rumble! `);
    }



//Delete option asking for the index number to delete

    deleteWrestler() {
        let index = prompt('Enter the number next to the name of the wrestler you want to delete');
        if (index > -1 && index < this.wrestlers.length) {
            this.wrestlers.splice(index,1);
        }
    }




//View option to see information about a selected wrestler (name and finisher)

//Selecting the wrestler to view
    viewWrestler() {
        let index = prompt (`Enter the number next to the name of the wrestler you want to view`);
        if (index > -1 && index < this.wrestlers.length) {
            this.selectedWrestler = this.wrestlers[index];

//Displaying the wrestlers name and finisher information
            let description = this.selectedWrestler.name + ' - ' + this.selectedWrestler.finisher;
            
//View wrestler menu options and what to do based on user selection value

            let selection = this.viewWrestlerMenuOptions(description);
            switch (selection) {
                case '1' :
                    this.viewWrestler();
                    break;
                case '2' :
                    this.createWrestler();
                    break;
                case '3' :
                    this.deleteWrestler();
            }
        }
    }
}

//Creating an instance of class "Menu"

let menu = new Menu();

//Starting the menu
menu.start();