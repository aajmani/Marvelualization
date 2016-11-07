var Characters = require('./characters.js');
var CharactersComic = require('./charactersComic.js');
var ComputeCharactersEdges = require('./computeCharactersEdges.js');
var characters = new Characters();
var Sync = require('sync');

//Get All Characters
/**
characters.getALLCharacters();
***/

//Get List of All Comics
/**
var XLSX = require('xlsx');
var workbook = XLSX.readFile('data/marvel_characters_list.xlsx');
var first_sheet_name = workbook.SheetNames[0];
var characters_wk = workbook.Sheets[first_sheet_name];
for (var i = 2; i <= 21; i++) {
    var characterID = characters_wk["A" + i].v;
    var characterName = characters_wk["B" + i].v;
    //console.log(characterID + ":" + characterName);
    var comics = new CharactersComic(characterID, characterName);
    comics.getListofComics();
}**/

//Compute Edge List
/**/
var XLSX = require('xlsx');
var workbook = XLSX.readFile('data/marvel_characters_list.xlsx');
var first_sheet_name = workbook.SheetNames[0];
var characters_wk = workbook.Sheets[first_sheet_name];
for (var i = 2; i < 21; i++) {
    var characterID_1 = characters_wk["A" + i].v;
    var characterName_1 = characters_wk["B" + i].v;
    //console.log(characterID + ":" + characterName);
    for (var j = 2; j <= 21; j++) {
        if (i != j) {
            var characterID_2 = characters_wk["A" + j].v;
            var characterName_2 = characters_wk["B" + j].v;
            console.log(characterName_1 + ":" + characterName_2);
            var edges = new ComputeCharactersEdges(characterID_1, characterName_1, characterID_2, characterName_2);
            edges.compute();
        }
    }
} /**/

//var edges = new ComputeCharactersEdges("1009159", "Archangel", "1009175", "Beast");
//edges.compute();