var app = angular.module("site");

app.controller("DisciplinesController",
 ['$scope', 'ClanService', 'DisciplineService',
 function($scope, ClanService, DisciplineService){

  this.selectDisciplinePt = selectDisciplinePt;
  this.disciplinesPage = "./disciplines/disciplines.html";
  this.freebies = false;
  this.disciplineList = ["Animalism", "Auspex", "Bardo", "Celerity",
                         "Chimerstry", "Daimonion", "Dementation",
                         "Dominate", "Flight", "Fortitude", "Melpominee",
                         "Mytherceria", "Necromancy", "Obeah", "Obfuscate",
                         "Obtenebration", "Ogham", "Potence", "Presence",
                         "Protean", "Quietus", "Sanguinus", "Serpentis",
                         "Spiritus", "Temporis", "Thanatosis", "Thaumaturgy",
                         "Valeren", "Vicissitude", "Visceratika"];

  function selectDisciplinePt(discipline, index){
    DisciplineService.selectDisciplinePt(discipline, index);
  }

  this.selectedClanDisciplines = getDisciplines();
  function getDisciplines(){
    return DisciplineService.selectedClanDisciplines;
  };

  this.getDisciplinePts = getDisciplinePts;
  function getDisciplinePts(){
    return DisciplineService.disciplinePts;
  };

}]);