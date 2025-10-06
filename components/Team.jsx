import TeamMembers from './../utilities/TeamMembers.js';
const Team = () => {
  return (
    <div className="w-full mx-auto px-4 py-4 bg-gray-400">
      <h1 className="text-5xl text-gray-100 font-bold font-serif mb-4 text-center py-4 shadow">Our Team</h1>
      <p className="text-gray-50 font-sans font-medium text-center mb-12 max-w-2xl mx-auto">
        Meet the talented individuals behind our success. Together, we're building something amazing.
      </p>
      
      {/* Responsive Grid: 
          - sm: 1 column in small screen
          - md: 2 columns in tablet/ipad screen 
          - lg: 3 columns in laptop big screen
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TeamMembers.map((member) => (
          <div 
            key={member.id} 
            className="bg-gray-300 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Profile Picture Placeholder */}
            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4">
                <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
            </div>
            
            {/* Member Info */}
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{member.name}</h3>
            <p className="text-blue-800 font-medium mb-4 text-center">{member.position}</p>
            <p className="text-sm text-gray-950 text-center">
              {member.about}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;