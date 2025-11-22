import { Card, CardHeader, CardContent, CardTitle } from './ui/card';
import { Trophy, Star, TrendingUp, Code, Award } from 'lucide-react';
import { FiArrowUpRight } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './AnimatedCounter';
import ProgressBar from './ProgressBar';
import TiltCard from './TiltCard';
import codeforcesLogo from '../assets/images/codeforces-logo.png';
import codechefLogo from '../assets/images/codechef-logo.jpeg';
import leetcodeLogo from '../assets/images/leetcode-logo.png';
import hackerrankLogo from '../assets/images/hackerrank-logo.jpeg';
import atcoderLogo from '../assets/images/atcode-logo.jpeg';
import lightojLogo from '../assets/images/lightoj-logo.jpeg';

const platforms = [
  {
    name: 'Codeforces',
    logo: codeforcesLogo,
    username: '@Rakib731',
    rating: 1294,
    maxRating: 3000,
    status: 'Pupil',
    solved: 900,
    maxSolved: 1500,
    contests: 20,
    profile: 'https://codeforces.com/profile/Rakib731',
    gradient: 'from-blue-600 to-blue-400',
    bgGradient: 'from-blue-600/10 to-blue-400/10'
  },
  {
    name: 'CodeChef',
    logo: codechefLogo,
    username: '@rakib730',
    rating: 1707,
    maxRating: 3000,
    status: '3★',
    solved: 64,
    maxSolved: 500,
    contests: 5,
    profile: 'https://www.codechef.com/users/rakib730',
    gradient: 'from-orange-500 to-yellow-500',
    bgGradient: 'from-orange-500/10 to-yellow-500/10'
  },
  {
    name: 'LeetCode',
    logo: leetcodeLogo,
    username: '@rakib_uddin',
    rating: 1538,
    maxRating: 3000,
    status: '',
    solved: 200,
    maxSolved: 1000,
    contests: 10,
    profile: 'https://leetcode.com/u/rakib730/',
    gradient: 'from-orange-600 to-yellow-600',
    bgGradient: 'from-orange-600/10 to-yellow-600/10'
  },
  {
    name: 'HackerRank',
    logo: hackerrankLogo,
    username: '@rakibuddinraki11',
    rating: 0,
    maxRating: 2000,
    status: '',
    solved: 50,
    maxSolved: 500,
    contests: 0,
    profile: 'https://www.hackerrank.com/rakibuddinraki11',
    gradient: 'from-green-600 to-green-400',
    bgGradient: 'from-green-600/10 to-green-400/10'
  },
  {
    name: 'AtCoder',
    logo: atcoderLogo,
    username: '@rakib730',
    rating: 48,
    maxRating: 4000,
    status: 'Gray',
    solved: 20,
    maxSolved: 500,
    contests: 5,
    profile: 'https://atcoder.jp/users/rakib730',
    gradient: 'from-gray-600 to-gray-400',
    bgGradient: 'from-gray-600/10 to-gray-400/10'
  },
  {
    name: 'LightOJ',
    logo: lightojLogo,
    username: '@rakib_uddin',
    rating: 0,
    maxRating: 2000,
    status: 'Intermediate',
    solved: 30,
    maxSolved: 500,
    contests: 2,
    profile: 'https://lightoj.com/user/rakib730',
    gradient: 'from-purple-600 to-purple-400',
    bgGradient: 'from-purple-600/10 to-purple-400/10'
  },
];

const achievements = [
  {
    icon: Trophy,
    title: 'Codeforces Pupil',
    desc: 'Secured 1200+ rating in Codeforces',
    year: '2024',
    gradient: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-500/10 to-orange-500/10'
  },
  {
    icon: Award,
    title: 'CodeChef 3-star Rating',
    desc: 'Achieved 3-star rating in CodeChef',
    year: '2024',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10'
  },
  {
    icon: Star,
    title: 'LeetCode 1500+ Rating',
    desc: 'Secured 1500+ rating in LeetCode',
    year: '2024',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10'
  },
];

const skillCategories = [
  {
    icon: Code,
    title: 'Problem Solving Skills',
    gradient: 'from-green-500 to-teal-500',
    bgGradient: 'from-green-500/10 to-teal-500/10',
    skills: [
      'Dynamic Programming & Greedy Algorithms',
      'Data Structure & Algorithms',
      'Graph Theory & Tree Data Structures',
      'Number Theory & Combinatorics',
      'Binary Search & Two Pointers',
      'Segment Trees & Advanced Data Structures',
      'Math & Geometry & Standard Template Library',
    ]
  },
  {
    icon: TrendingUp,
    title: 'Learning Approach',
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-500/10 to-purple-500/10',
    skills: [
      'Regular Practice: Solving 3-5 problems daily',
      'Contest Participation: Weekly contests simulation',
      'Algorithm Study: Deep diving into concepts',
      'Implementation: Building from scratch',
      'Problem Analysis: Understanding patterns',
      'Time Management: Optimizing solving speed'
    ]
  }
];

const CompetitiveProgramming = () => (
  <section id="competitive-programming" className="py-14 sm:py-20 bg-background">
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-2">
          <span className="text-foreground">Competitive</span> <span className="bg-gradient-primary bg-clip-text text-transparent">Programming</span>
        </h2>
        <p className="text-base xs:text-lg text-muted-foreground max-w-xs xs:max-w-md sm:max-w-3xl mx-auto">
          Passionate about solving algorithmic challenges and participating in programming contests across various platforms.
        </p>
      </div>

      {/* Enhanced Platform Stats with Animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
        {platforms.map((p, i) => {
          const { ref, inView } = useInView({
            threshold: 0.2,
            triggerOnce: true,
          });

          return (
            <div
              key={i}
              ref={ref}
              className={`transition-all duration-700 ${inView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
              style={{
                transitionDelay: `${i * 100}ms` // Staggered animation
              }}
            >
              <TiltCard className="h-full group">
                <Card className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 h-full flex flex-col">
                  {/* Gradient background overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Top gradient border */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${p.gradient}`}></div>

                  <CardHeader className="relative flex flex-row items-center gap-3 sm:gap-4 pb-3">
                    {/* Enhanced Logo Container */}
                    <div className="relative">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${p.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                          <img src={p.logo} alt={p.name} loading="lazy" decoding="async" width="32" height="32" className="h-6 w-6 sm:h-8 sm:w-8 rounded" />
                        </div>
                      </div>

                      {/* Animated ring on hover */}
                      <div className={`absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${p.gradient} opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500 blur-sm`}></div>
                    </div>

                    <CardTitle className="text-base sm:text-lg text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {p.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative pt-0 flex-1 flex flex-col">
                    <div className="mb-2 text-muted-foreground text-xs sm:text-sm font-medium">{p.username}</div>

                    {/* Animated Rating Badge */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                      {p.rating > 0 && (
                        <span className="bg-primary/15 text-primary px-2 py-1 rounded-md text-xs font-semibold">
                          <AnimatedCounter end={p.rating} duration={2000} /> {p.status}
                        </span>
                      )}
                      {p.rating === 0 && p.status && (
                        <span className="bg-primary/15 text-primary px-2 py-1 rounded-md text-xs font-semibold">
                          {p.status}
                        </span>
                      )}
                    </div>

                    {/* Animated Stats with Progress Bars */}
                    <div className="space-y-3 mb-3">
                      {/* Rating Progress */}
                      {p.rating > 0 && (
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-muted-foreground">Rating</span>
                            <span className="text-card-foreground font-semibold">
                              <AnimatedCounter end={p.rating} duration={2000} />
                            </span>
                          </div>
                          <ProgressBar
                            value={p.rating}
                            maxValue={p.maxRating}
                            gradient={p.gradient}
                            height="h-1.5"
                          />
                        </div>
                      )}

                      {/* Problems Solved Progress */}
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-muted-foreground">Problems Solved</span>
                          <span className="text-card-foreground font-semibold">
                            <AnimatedCounter end={p.solved} duration={2000} suffix="+" />
                          </span>
                        </div>
                        <ProgressBar
                          value={p.solved}
                          maxValue={p.maxSolved}
                          gradient={p.gradient}
                          height="h-1.5"
                        />
                      </div>

                      {/* Contests */}
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Contests</span>
                        <span className="text-card-foreground font-semibold">
                          <AnimatedCounter end={p.contests} duration={1500} suffix="+" />
                        </span>
                      </div>
                    </div>

                    <a
                      href={p.profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-xs sm:text-sm font-medium mt-auto group/link"
                    >
                      View Profile
                      <FiArrowUpRight className="h-3 w-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>

                    {/* Bottom decoration */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
                  </CardContent>
                </Card>
              </TiltCard>
            </div>
          );
        })}
      </div>

      {/* Achievements */}
      <div className="mb-10 sm:mb-16">
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
          Major <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => {
            const { ref, inView } = useInView({
              threshold: 0.2,
              triggerOnce: true,
            });

            return (
              <div
                key={index}
                ref={ref}
                className={`transition-all duration-700 ${inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
                  }`}
                style={{
                  transitionDelay: `${index * 150}ms` // Staggered animation
                }}
              >
                <TiltCard className="h-full group">
                  <Card className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 h-full">
                    {/* Gradient background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    {/* Top gradient border */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${achievement.gradient}`}></div>

                    <CardContent className="relative p-4 sm:p-5 text-center">
                      {/* Enhanced Icon Container */}
                      <div className="relative mb-3 sm:mb-4">
                        <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-r ${achievement.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                            <achievement.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                          </div>
                        </div>

                        {/* Animated ring on hover */}
                        <div className={`absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-25 group-hover:scale-125 transition-all duration-500 blur-sm`}></div>
                      </div>

                      <h4 className="text-sm sm:text-base font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2">
                        {achievement.desc}
                      </p>

                      <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">
                        {achievement.year}
                      </span>

                      {/* Bottom decoration */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
                    </CardContent>
                  </Card>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills & Learning Approach */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
        {skillCategories.map((category, index) => {
          const { ref, inView } = useInView({
            threshold: 0.2,
            triggerOnce: true,
          });

          return (
            <div
              key={index}
              ref={ref}
              className={`transition-all duration-700 ${inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
                }`}
              style={{
                transitionDelay: `${index * 200}ms` // Staggered animation
              }}
            >
              <TiltCard className="h-full group">
                <Card className="relative overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 h-full">
                  {/* Gradient background overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Top gradient border */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${category.gradient}`}></div>

                  <CardHeader className="relative">
                    <CardTitle className="text-base sm:text-xl text-card-foreground flex items-center gap-3 group-hover:text-primary transition-colors duration-300">
                      <div className={`p-2 bg-gradient-to-r ${category.gradient} rounded-lg`}>
                        <category.icon className="h-5 w-5 text-white" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative">
                    <ul className="space-y-2 sm:space-y-3">
                      {category.skills.map((skill, i) => (
                        <li key={i} className="flex items-start gap-2 text-card-foreground text-xs sm:text-sm leading-relaxed">
                          <span className="text-primary mt-1 flex-shrink-0">●</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  {/* Bottom decoration */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></div>
                </Card>
              </TiltCard>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default CompetitiveProgramming; 