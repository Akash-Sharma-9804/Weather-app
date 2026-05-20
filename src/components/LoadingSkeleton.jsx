const SkeletonCard = ({ className = '' }) => (
  <div className={`glass rounded-3xl p-8 animate-pulse ${className}`}>
    <div className="h-4 bg-slate-200 rounded w-1/3 mb-6"></div>
    <div className="flex items-center gap-6">
      <div className="w-20 h-20 bg-slate-200 rounded-full shrink-0"></div>
      <div className="w-full">
        <div className="h-16 bg-slate-200 rounded w-1/2 mb-2"></div>
        <div className="h-5 bg-slate-200 rounded w-1/3"></div>
      </div>
    </div>
  </div>
);

const LoadingSkeleton = () => (
  <div className="w-full max-w-6xl mx-auto space-y-5">
    <div className="glass-strong rounded-2xl p-4 mb-6">
      <div className="h-10 bg-slate-200 rounded-xl w-full animate-pulse"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="lg:col-span-7">
        <SkeletonCard />
      </div>
      <div className="lg:col-span-5 flex flex-col gap-4">
        <div className="glass rounded-3xl min-h-[200px] bg-slate-100 animate-pulse flex-1"></div>
        <div className="grid grid-cols-2 gap-3">
          <div className="glass rounded-2xl h-20 bg-slate-100 animate-pulse"></div>
          <div className="glass rounded-2xl h-20 bg-slate-100 animate-pulse"></div>
        </div>
      </div>
    </div>

    <div className="glass rounded-2xl p-4 animate-pulse">
      <div className="flex gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center min-w-[80px] gap-2">
            <div className="h-3 bg-slate-200 rounded w-10"></div>
            <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
            <div className="h-4 bg-slate-200 rounded w-6"></div>
          </div>
        ))}
      </div>
    </div>

    <div className="h-px bg-slate-200 my-4"></div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="glass rounded-2xl p-5 h-28 bg-slate-100 animate-pulse"></div>
      ))}
    </div>
  </div>
);

export default LoadingSkeleton;
