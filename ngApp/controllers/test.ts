namespace aci.Controllers {

    export class testController {
      public category
      public places

      public getPlaces() {
        this.placeService.getPlaces(this.category).then((result) => {
          this.places = result;
        })
      }

      public deletePlace(placeId) {
        this.placeService.removePlace(placeId);
      }


//add place
      public place

      public addPlace() {
        this.placeService.savePlace(this.place);
      }

//edit place
      public placeId

      public editPlace() {
        this.place._id = this.placeId;
        this.placeService.savePlace(this.place);
      }


      public constructor(
        public $scope,
        private placeService,
        public $stateParams
      ) {
        this.placeId = $stateParams['id'];
      }

}

//end
}
