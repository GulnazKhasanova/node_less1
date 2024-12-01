const yargs = require("yargs");

const { addNote, printNotes, noteRemove } = require("./notes.controller");
yargs.command({
  command: "add",
  describe: "Add new note to list",
  builder: {
    title: {
      type: "string",
      describe: "Note title",
      demandOption: true,
    },
  },
  hendler({ title }) {
    addNote(title);
  },
});

yargs.command({
  command: "list",
  describe: "Print all notes",
  async hendler() {
    printNotes();
  },
});

yargs.command({
  command: "remove",
  describe: "Remove note by id",
  async hendler() {
    console.log("Note is removed");
    noteRemove(process.argv[2]);
    printNotes();
  },
});

yargs.parse();
