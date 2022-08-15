
export class Data {

    
    getCustomersLarge() {
        return fetch('./data.json').then(res => res.json())
                .then(d => d.data);
    }

    
   
}
     