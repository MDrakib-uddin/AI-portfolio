import { FaGraduationCap, FaRegListAlt } from 'react-icons/fa';

const degrees = [
    {
    title: 'B.Sc in Computer Science & Engineering',
    institution: 'CoxsBazar International University',
    period: '2023 - 2027',
    description: 'Graduated with honors. Coursework in algorithms, data structures, and artificial intelligence fundamentals.'
    },
    {
    title: 'Higher Secondary Certificate (HSC)',
    institution: 'Ramu Government Collage',
    period: '2020 - 2022',
    description: 'Completed Higher Secondary Certificate with strong academic performance. Focused on foundational topics in Mathematics, Physics, Chemistry, Biology and introductory Programming.'
  }
];

const courses = [
    {
    title: 'Deep Learning Specialization',
    institution: 'Coursera (Andrew Ng)',
    period: '2025',
    description: 'Covered neural networks, CNNs, sequence models, and practical deep learning techniques.'
  },
  {
    title: 'Machine Learning with Python',
    institution: 'IBM Coursera',
    period: '2025',
    description: 'Supervised/unsupervised learning, best practices, and real-world ML applications.'
    },
    {
    title: 'Deep learning & Reinforcement Learning',
    institution: 'IBM',
    period: '2025',
    description: 'ANN, CNN, RNN, Python, Reinforcement Learning, and Potato Disease Projects.'
  }
];

const Education = () => (
  <>
    <section id="education" className="py-14 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-2">
          <span className="text-foreground">Academic</span> <span className="bg-gradient-primary bg-clip-text text-transparent">Qualification</span>
        </h2>
        <div className="text-base xs:text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
          Strong academic background in Computer Science, focused on algorithms, data structures, and AI.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {/* Left: Degrees Timeline */}
                  <div>
          <div className="flex items-center gap-2 mb-5 sm:mb-8">
            <FaGraduationCap className="text-primary text-xl sm:text-2xl" />
            <h2 className="text-lg sm:text-2xl font-bold text-foreground">Education</h2>
                      </div>
          <ul className="relative border-l-2 border-primary/30 ml-2 sm:ml-4">
            {degrees.map((deg, i) => (
              <li key={i} className="mb-6 sm:mb-10 ml-2 sm:ml-4">
                <span aria-hidden="true" className="absolute -left-4 sm:-left-5 flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full ring-4 ring-background"></span>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">{deg.title}</h3>
                <div className="text-muted-foreground text-xs sm:text-sm mb-1">{deg.institution} <span className="mx-1">•</span> {deg.period}</div>
                <div className="text-muted-foreground text-xs sm:text-sm">{deg.description}</div>
              </li>
            ))}
          </ul>
                      </div>
        {/* Right: Courses Timeline */}
        <div className="mt-10 md:mt-0">
          <div className="flex items-center gap-2 mb-5 sm:mb-8">
            <FaRegListAlt className="text-primary text-xl sm:text-2xl" />
            <h2 className="text-lg sm:text-2xl font-bold text-foreground">Completed Courses</h2>
                    </div>
          <ul className="relative border-l-2 border-primary/30 ml-2 sm:ml-4 max-h-96 overflow-auto">
            {courses.map((course, i) => (
              <li key={i} className="mb-6 sm:mb-10 ml-2 sm:ml-4">
                <span aria-hidden="true" className="absolute -left-4 sm:-left-5 flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full ring-4 ring-background"></span>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">{course.title}</h3>
                <div className="text-muted-foreground text-xs sm:text-sm mb-1">{course.institution} <span className="mx-1">•</span> {course.period}</div>
                <div className="text-muted-foreground text-xs sm:text-sm">{course.description}</div>
              </li>
                  ))}
          </ul>
                </div>
        </div>
      </div>
    </section>
  </>
);

export default Education;