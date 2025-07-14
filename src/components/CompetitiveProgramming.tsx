import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { FaTrophy, FaMedal, FaStar, FaCode, FaChartLine } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const platforms = [
  {
    name: 'Codeforces',
    logo: 'https://sta.codeforces.com/s/20607/images/codeforces-logo.png',
    username: '@Rakib731',
    rating: '1216',
    status: 'Pupil',
    solved: '700+',
    contests: '20+',
    profile: 'https://codeforces.com/profile/Rakib731',
  },
  {
    name: 'CodeChef',
    logo: 'https://cdn.codechef.com/images/cc-logo.svg',
    username: '@rakib730',
    rating: '1707',
    status: '3★',
    solved: '64+',
    contests: '5+',
    profile: 'https://www.codechef.com/users/rakib730',
  },
  {
    name: 'LeetCode',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
    username: '@rakib_uddin',
    rating: '1538',
    status: '',
    solved: '200+',
    contests: '10+',
    profile: 'https://leetcode.com/rakib_uddin',
  },
  {
    name: 'HackerRank',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png',
    username: '@rakibuddinraki11',
    rating: '',
    status: '',
    solved: '50+',
    contests: '0',
    profile: 'https://www.hackerrank.com/rakibuddinraki11',
  },
  {
    name: 'AtCoder',
    logo: 'https://img.atcoder.jp/assets/atcoder.png',
    username: '@rakib730',
    rating: '48',
    status: 'Gray',
    solved: '20+',
    contests: '5+',
    profile: 'https://atcoder.jp/users/rakib730',
  },
  {
    name: 'LightOJ',
    logo: 'https://toph.co/static/images/oj-logos/lightoj-512.png',
    username: '@rakib_uddin',
    rating: '',
    status: 'Intermediate',
    solved: '30+',
    contests: '0',
    profile: 'https://lightoj.com/user/rakib_uddin',
  },
];

const achievements = [
  {
    icon: <FaTrophy className="text-3xl text-primary mx-auto mb-2" />, title: 'Codeforces Pupil', desc: 'Secured 1200+ rating in Codeforces', year: '2024',
  },
  {
    icon: <FaMedal className="text-3xl text-primary mx-auto mb-2" />, title: 'CodeChef 3-star Rating', desc: 'Achieved 3-star rating in CodeChef', year: '2024',
  },
  {
    icon: <FaStar className="text-3xl text-primary mx-auto mb-2" />, title: 'LeetCode 1500+ Rating', desc: 'Secured 1500+ rating in LeetCode', year: '2024',
  },
];

const skills = [
  'Dynamic Programming & Greedy Algorithms',
  'Data Structure & Algorithms',
  'Graph Theory & Tree Data Structures',
  'Number Theory & Combinatorics',
  'Binary Search & Two Pointers',
  'Segment Trees & Advanced Data Structures',
  'Math & Geometry & Standard Template Library',
];

const learning = [
  { title: 'Regular Practice', desc: 'Solving 3-5 problems daily to maintain consistency and improve problem-solving speed.' },
  { title: 'Contest Participation', desc: 'Actively participating in weekly contests to simulate real competition environment.' },
  { title: 'Algorithm Study', desc: 'Deep diving into algorithm concepts and implementing them from scratch.' },
];

const CompetitiveProgramming = () => (
  <section id="competitive-programming" className="py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">
          <span className="text-foreground">Competitive</span> <span className="bg-gradient-primary bg-clip-text text-transparent">Programming</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Passionate about solving algorithmic challenges and participating in programming contests across various platforms.
        </p>
      </div>
      {/* Platforms */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {platforms.map((p, i) => (
          <Card key={i} className="bg-card border-border hover:shadow-glow-purple/20 transition-all duration-300 flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <img src={p.logo} alt={p.name} className="h-10 w-10 rounded" />
              <CardTitle className="text-xl text-card-foreground">{p.name}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 flex-1 flex flex-col">
              <div className="mb-2 text-muted-foreground">{p.username}</div>
              <div className="flex flex-wrap gap-2 mb-2">
                {p.rating && <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">{p.rating} {p.status}</span>}
                {!p.rating && p.status && <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">{p.status}</span>}
                <span className="bg-secondary/50 text-card-foreground px-2 py-1 rounded text-xs font-semibold">{p.solved} Problems Solved</span>
                <span className="bg-secondary/50 text-card-foreground px-2 py-1 rounded text-xs font-semibold">{p.contests} Contests</span>
              </div>
              <a href={p.profile} target="_blank" rel="noopener noreferrer" className="text-primary underline mt-auto">View Profile <FiArrowUpRight className="inline" /></a>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Achievements */}
      <div className="bg-card border-border rounded-xl p-8 mb-16">
        <h3 className="text-2xl font-semibold mb-2 text-center text-card-foreground">Notable Achievements</h3>
        <p className="text-muted-foreground text-center mb-8">Highlights from my competitive programming journey</p>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((a, i) => (
            <div key={i} className="bg-secondary/30 rounded-lg p-6 text-center flex flex-col items-center">
              {a.icon}
              <div className="font-bold text-lg mb-1 text-card-foreground">{a.title}</div>
              <div className="text-muted-foreground text-sm mb-1">{a.desc}</div>
              <div className="text-xs text-primary">{a.year}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Skills & Learning Approach */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-card-foreground flex items-center gap-2"><FaCode /> Problem Solving Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {skills.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-card-foreground"><span className="text-green-400">●</span> {s}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-card-foreground flex items-center gap-2"><FaChartLine /> Learning Approach</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {learning.map((l, i) => (
                <li key={i} className="bg-secondary/30 rounded p-4">
                  <div className="font-bold text-card-foreground mb-1">{l.title}</div>
                  <div className="text-muted-foreground text-sm">{l.desc}</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default CompetitiveProgramming; 