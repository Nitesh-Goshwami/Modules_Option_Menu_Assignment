const readline = require("readline");
const readline1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var book_arr = [
  "In Search of Lost Time",
  "Ulysses",
  "Don Quixote",
  "One Hundred Years of Solitude ",
  "The Great Gatsby",
];


readline1.setPrompt(`Press 1, 2 or 3 to do the below actions based on your selection \n 1 - Show all books \n 2 - Add a new book \n 3 - Quit \n Enter: `);
readline1.prompt();

readline1.on("line", option => {

        if (option == 1) {
          let i = 1;
          console.log("The Books in The Library are :")
          book_arr.forEach((el) => {
            console.log(`${i} :`,el);
            i++;
          });
            readline1.prompt();
        } else if (option == 2) {
            readline1.question(`\n Enter the name of the book that you want to add: \n Enter: `, (bookName) => {
                book_arr.push(bookName);
                console.log(`${bookName} has been added successfully!`);
                readline1.prompt();
            });
        } else if (option == 3) {
            readline1.question(`Are you sure you want to quit - press Y to quit. \n Enter: `, (key) => {
                if (key == "Y" || key == 'y') {
                    readline1.close();
                } else {
                    readline1.prompt()
                }
            });
        } else {
            console.log("Invalid input!");
            readline1.prompt();
        }
});

readline1.on("close", function () {
    console.log("Bye Bye!");
}); 