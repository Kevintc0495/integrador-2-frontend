export interface ProyectTable {
  id: number;
  id_proyecto_detalle: number;
  id_empleado: number;
  id_rol: number;
  horas: number;
  empleado: string;
  rol: string;
}

export interface TableProyectosProps {
  data: DataNewProject;
  proyectTable: ProyectTable[];
  setProyectTable:  React.Dispatch<React.SetStateAction<ProyectTable[]>>;
  empleado: string;
  rol: string;
  setIdElementDetalle: React.Dispatch<React.SetStateAction<number[]>>;
  id: string | undefined;
}

export interface DataNewProject {
  id_proyecto: number;
  id_estado: number;
  id_cliente: number;
  id_tipo: number;
  nombre: string;
  codigo_gestion: number;
  fecha_inicio: string;
  fecha_fin: string;
  horas_planificadas: number;
  horas: number;
  monto: number;
  id_empleado: number;
  id_rol: number;
}

export interface SelectClients {
  value: number;
  label: string;
}