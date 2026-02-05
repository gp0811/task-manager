import './App.css';
import TaskBoard from './components/Task/TaskBoard';

function App() {
  return (
    <div className="min-h-screen text-slate-900 flex flex-col bgColor">
      <header className="bg-black border-b border-slate-400 py-4 px-6 mb-8 shadow-sm sticky top-0 z-10">
        <div className='max-w-5xl mx-auto w-full flex items-center justify-between'>
          <div className='flex gap-2 items-center'>
            <div className='w-8 h-8 bg-blue-900 text-white rounded-lg flex items-center justify-center text-lg font-bold'>
              T
            </div>
            <h1 className='text-xl font-bold text-white'>Task Manager</h1>
          </div>
        </div>
      </header>
      <div className=''>
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 pb-12 ">
        <div className='space-y-8'>
          <section>
            <TaskBoard/>
          </section>
        </div>
      </main>
      </div>
      <footer className='border-t border-slate-200 py-4 mt-auto'>
        <div className="max-w-5xl mx-auto px-6 text-center text-slate-400 text-sm">
          <p>Task Manager &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
