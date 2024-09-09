( () => {

    let contador: number = 0;

    const button = document.querySelector<HTMLButtonElement>('#button');
    const button2 = document.querySelector<HTMLButtonElement>('#button2');
    const miDiv = document.querySelector<HTMLDivElement>('#miDiv');

    button?.addEventListener('click', ():void => {
        
        
        if( miDiv ) {

            miDiv.innerHTML = `<div
            <strong>${ contador+=1 }</strong>
            </div>
            `;

        }
    
    });

    button2?.addEventListener('click', ():void => {
        
        
        if( miDiv ) {

            miDiv.innerHTML = `<div
            <strong>${ contador = 0 }</strong>
            </div>
            `;

        };


    });

    
    


})();