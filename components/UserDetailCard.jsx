function UserDetailCard({title, text}) {
  return (
      <article className="text-center">
            <a href="" className="group">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:underline transition-all">
                    {title}
                </h3>
            </a>
            <p className="text-gray-300 leading-relaxed">
                {text}
            </p>
        </article>
  )
}

export default UserDetailCard