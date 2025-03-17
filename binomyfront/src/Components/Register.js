import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Register() {
  return (
    <div className="isolate bg-gradient-to-tr from-blue-300 to-transparent px-6 py-24 sm:py-32 lg:px-8">
    <form style={{width:'70%',margin:'0 auto',padding:'3%'}}> 
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Devenir membre</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
          Pour l'inscription sur Binomy, veuillez remplir ce formulaire
          </p>

        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900"> Informations personnelles </h2>
          <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                Prénom
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                Nom
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                Cin
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="number"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                Téléphone
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="number"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email 
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                Gouvernerat
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>Tunis</option>
                  <option>Ben Arous</option>
                  <option>Ariana</option>
                  <option>Mannouba</option>
                  <option>Nabeul</option>
                  <option>Monastir</option>
                  <option>Mednine</option>
                  <option>Bizerte</option>
                  <option>Gabes</option>
                  <option>Beja</option>
                  <option>Tataouinr</option>
                  <option>Zaghouan</option>
                  <option>Kasserine</option>
                  <option>Jendouba</option>
                  <option>Siliana</option>
                  <option>Sidi Bouzid</option>
                  <option>Kef</option>
                  <option>Kairouan</option>
                  <option>Mahdia</option>
                  <option>Gafsa</option>
                  <option>Tozeur</option>
                  <option>Gbelli</option>
                  <option>Sfax</option>
                  <option>Mahdia</option>

                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                Adresse
              </label>
              <div className="mt-2">
                <input
                  id="street-address"
                  name="street-address"
                  type="text"
                  autoComplete="street-address"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>



            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  id="postal-code"
                  name="postal-code"
                  type="text"
                  autoComplete="postal-code"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                Mot de passe
              </label>
              <div className="mt-2">
                <input
                  id="street-address"
                  name="street-address"
                  type="password"
                  autoComplete="street-address"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>  

            
          </div>
        </div>


        <div className="col-span-full">
              <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                A propos
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">Écris quelques phrases sur toi.</p>
            </div>
      </div>
      
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


<div className="col-span-full">
  <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
    Photo
  </label>
  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
    <div className="text-center">
      <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
      <div className="mt-4 flex text-sm/6 text-gray-600">
        <label
          htmlFor="file-upload"
          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
        >
          <span>Télécharger une photo</span>
          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
        </label>
       
      </div>
      <p className="text-xs/5 text-gray-600">PNG, JPG, GIF 
      </p>
    </div>
  </div>
</div>
</div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Annuler
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Valider 
        </button>
      </div>
    </form>
    </div>
  )
}
