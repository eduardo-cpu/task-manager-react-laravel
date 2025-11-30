import { useState, useEffect } from 'react';
import api from '../services/api';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await api.get('/dashboard');
      setStats(response.data);
    } catch (error) {
      console.error('Erro ao carregar dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const StatCard = ({ title, value, color, icon }) => (
    <div className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${color}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
        </div>
        <div className={`text-4xl ${color.replace('border-', 'text-')}`}>{icon}</div>
      </div>
    </div>
  );

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total de Tarefas"
          value={stats?.total_tasks || 0}
          color="border-blue-500"
          icon="📋"
        />
        <StatCard
          title="Pendentes"
          value={stats?.pending_tasks || 0}
          color="border-yellow-500"
          icon="⏳"
        />
        <StatCard
          title="Em Progresso"
          value={stats?.in_progress_tasks || 0}
          color="border-purple-500"
          icon="🔄"
        />
        <StatCard
          title="Concluídas"
          value={stats?.completed_tasks || 0}
          color="border-green-500"
          icon="✅"
        />
      </div>

      {/* Taxa de Conclusão e Atrasadas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Taxa de Conclusão</h3>
          <div className="flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-4 mr-4">
              <div
                className="bg-green-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${stats?.completion_rate || 0}%` }}
              ></div>
            </div>
            <span className="text-xl font-bold text-gray-800">{stats?.completion_rate || 0}%</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Tarefas por Prioridade</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">🔴 Alta</span>
              <span className="font-semibold">{stats?.tasks_by_priority?.high || 0}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">🟡 Média</span>
              <span className="font-semibold">{stats?.tasks_by_priority?.medium || 0}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">🟢 Baixa</span>
              <span className="font-semibold">{stats?.tasks_by_priority?.low || 0}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tarefas Atrasadas e Próximas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {stats?.overdue_tasks > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ Tarefas Atrasadas</h3>
            <p className="text-3xl font-bold text-red-600">{stats.overdue_tasks}</p>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📅 Próximas Tarefas</h3>
          {stats?.upcoming_tasks?.length > 0 ? (
            <ul className="space-y-3">
              {stats.upcoming_tasks.map((task) => (
                <li key={task.id} className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">{task.title}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(task.due_date).toLocaleDateString('pt-BR')}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Nenhuma tarefa próxima</p>
          )}
        </div>
      </div>
    </div>
  );
}
