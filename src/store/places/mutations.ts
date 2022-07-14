import { MutationTree } from 'vuex';
import { PlacesState } from './state';


const mutation: MutationTree<PlacesState> = {
    setLngLat(state, { lng, lat }: { lng: number, lat: number }) {
        state.userLocation = [lng,lat];
        state.isLoading = false;
        
    }
}


export default mutation;