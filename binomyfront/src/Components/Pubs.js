const posts = [
    {
        "id": 1,
        "title": "Cherche une binôme en urgence",
        "href": "#",
        "description": "Je suis à la recherche d'une colocataire sérieuse et sympathique pour partager un appartement à proximité du campus. Disponible immédiatement, budget raisonnable. Contactez-moi en privé !",
        "date": "Mars 1, 2025",
        "datetime": "2025-03-01",
        "category": { "title": "Contacter", "href": "#" },
        "author": {
          "name": "Eya",
          "role": "Étudiante en Multimédia",
          "href": "#",
          "imageUrl": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wyMzQ3Nzc3fHxlbnwwfHx8fHw%3DD"
        }
    },
    
    {
        "id": 2,
        "title": "Recherche colocataire pour partager un studio",
        "href": "#",
        "description": "Je propose de partager un studio moderne à proximité du centre-ville. Loyer abordable, ambiance conviviale et respect de l'espace personnel. Intéressé(e) ? Contactez-moi !",
        "date": "Mars 10, 2025",
        "datetime": "2025-03-10",
        "category": { "title": "Contacter", "href": "#" },
        "author": {
          "name": "Mehdi",
          "role": "Étudiant en Informatique",
          "href": "#",
          "imageUrl": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80"
        }
      },
      {
        "id": 3,
        "title": "Appartement disponible pour une colocation",
        "href": "#",
        "description": "Je quitte mon logement et je cherche quelqu'un pour reprendre ma place dans une colocation sympa avec deux autres étudiants. Appartement bien situé, proche des transports. DM pour plus d’infos !",
        "date": "Mars 5, 2025",
        "datetime": "2025-03-05",
        "category": { "title": "Contacter", "href": "#" },
        "author": {
          "name": "Lina",
          "role": "Étudiante en Économie",
          "href": "#",
          "imageUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80"
        }
    }

    // More posts...
  ]
  
  export default function Pubs() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Trouver votre binome!</h2>
            <p className="mt-2 text-lg/8 text-gray-600">Découvrez les dernières annonces et partages des étudiants en quête de colocation.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  