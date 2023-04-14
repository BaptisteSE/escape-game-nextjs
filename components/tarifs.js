const Tarifs = ({ tarifs }) => {
    return (
      <div>
        <ul>
          {tarifs.data.map((tarif) => (
            <>
            <div class="flex items-center">
              <div class="mx-auto max-w-xs px-8">
                <p class="text-base font-bold text-gray-600">{tarif.attributes.nbPlayers} joueurs</p>
                <p class="mt-6 flex items-baseline justify-center gap-x-2">
                  <span class="text-5xl font-bold tracking-tight text-gray-900">{tarif.attributes.priceByPerson}</span>
                  <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">euros / personne</span>
                </p>
                <a href="#" class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Réserver</a>
                <p class="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
              </div>
            </div>           
            </>
          ))}
        </ul>
      </div>
    );
  };
   
export default Tarifs;