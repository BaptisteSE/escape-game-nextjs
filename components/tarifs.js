const Tarifs = ({ tarifs }) => {
  return (
    <div className="flex flex-wrap justify-center -mx-4">
      {tarifs.data.map((tarif) => (
        <div key={tarif.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <p className="text-lg font-bold text-gray-900 mb-2">{tarif.attributes.nbPlayers} joueurs</p>
              <div className="flex items-baseline mb-4">
                <p className="text-5xl font-bold tracking-tight text-gray-900">{tarif.attributes.priceByPerson}</p>
                <p className="text-xl font-semibold leading-6 tracking-wide text-gray-600 ml-2">euros / personne</p>
              </div>
              <a href="#" className="block w-full py-2 px-4 text-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-md shadow-md transition-colors duration-300">
                Réserver
              </a>
              <p className="mt-4 text-sm leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tarifs;
