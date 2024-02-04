const people = [
    {
      name: 'Treatment can be prescribed',
      role: 'can access by chemist or Dr.',
      imageUrl:
        'https://tse1.mm.bing.net/th?id=OIP.j_sMGpuF53gtHez5nggWHQAAAA&pid=Api&P=0&h=180',
    },
    {
        name: 'History of paitent Can be accessed by Dr.',
        role: 'for perticular date or whole',
        imageUrl:
          'https://tse2.mm.bing.net/th?id=OIP.bxMuvBAqNcQElqgMb5N5hwHaHa&pid=Api&P=0&h=180',
      },
      {
        name: 'Article can be posted by Dr.',
        role: 'can be read by all user ',
        imageUrl:
          'https://icon-library.com/images/health-care-icon/health-care-icon-15.jpg',
      },
       
      {
        name: 'User Can comment on Article or can reply comment',
        role: 'All user can',
        imageUrl:
          'https://tse1.mm.bing.net/th?id=OIP.vNuwXJ13BPJ3p2JtgoDchQHaG5&pid=Api&P=0&h=180',
      },
      {
        name: 'User can Sign in/up ',
        role: 'As a doctor or Paitent',
        imageUrl:
          'https://tse3.mm.bing.net/th?id=OIP.-4OqdZglQJOhEP1SxsSg1gAAAA&pid=Api&P=0&h=180',
      },
      {
        name: 'User can see or Edit Profile',
        role: 'all user can ',
        imageUrl:
          'https://static.thenounproject.com/png/125115-200.png'
      }
      
    // More people...
  ]
  
  export default function Aboutus() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Doctor Buddy: Your Virtual Health Companion for Holistic Wellness</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Elevate your healthcare experience with Doctor Buddy—a virtual platform where online consultations, personalized prescriptions, seamless history tracking, and insightful articles converge, providing a comprehensive and empowering approach to well-being.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  