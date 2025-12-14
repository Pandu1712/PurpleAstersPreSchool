import { Star, Heart, Cloud, Sun, Moon, Flower2, Sparkles, Smile } from 'lucide-react';

const floatingElements = [
  { Icon: Star, color: '#FDB64E', size: 24, delay: '0s', duration: '6s', top: '10%', left: '5%' },
  { Icon: Heart, color: '#FF6B9D', size: 28, delay: '1s', duration: '7s', top: '20%', right: '10%' },
  { Icon: Cloud, color: '#4A9FD8', size: 32, delay: '2s', duration: '8s', top: '40%', left: '8%' },
  { Icon: Sun, color: '#FDB64E', size: 30, delay: '0.5s', duration: '7.5s', top: '60%', right: '5%' },
  { Icon: Moon, color: '#5B4FBF', size: 26, delay: '1.5s', duration: '6.5s', top: '70%', left: '12%' },
  { Icon: Flower2, color: '#9B7FDF', size: 28, delay: '2.5s', duration: '8.5s', top: '15%', right: '15%' },
  { Icon: Sparkles, color: '#4A9FD8', size: 24, delay: '0.8s', duration: '7s', top: '80%', right: '8%' },
  { Icon: Smile, color: '#FDB64E', size: 30, delay: '1.2s', duration: '6.8s', top: '50%', left: '3%' },
  { Icon: Star, color: '#5B4FBF', size: 20, delay: '3s', duration: '9s', top: '35%', right: '20%' },
  { Icon: Heart, color: '#FF6B9D', size: 22, delay: '2.2s', duration: '7.2s', top: '90%', left: '15%' },
];

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingElements.map((element, index) => {
        const { Icon, color, size, delay, duration, top, left, right } = element;

        const style: React.CSSProperties = {
          position: 'absolute',
          color,
          animationDelay: delay,
          animationDuration: duration,
          top,
          ...(left && { left }),
          ...(right && { right }),
        };

        return (
          <div
            key={index}
            className="animate-float-gentle opacity-30 hover:opacity-60 transition-opacity"
            style={style}
          >
            <Icon size={size} className="fill-current" />
          </div>
        );
      })}
    </div>
  );
}
