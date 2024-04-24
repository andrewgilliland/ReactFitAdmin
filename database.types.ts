export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      exercises: {
        Row: {
          created_at: string
          difficulty: Database["public"]["Enums"]["difficulty"] | null
          equipment: Database["public"]["Enums"]["equipment"] | null
          exercise_type: Database["public"]["Enums"]["exercise_type"] | null
          force_type: Database["public"]["Enums"]["force_type"] | null
          id: number
          mechanics: Database["public"]["Enums"]["mechanics"] | null
          name: string | null
          secondary_muscles:
            | Database["public"]["Enums"]["muscle_group"][]
            | null
          target_muscle_group:
            | Database["public"]["Enums"]["muscle_group"]
            | null
        }
        Insert: {
          created_at?: string
          difficulty?: Database["public"]["Enums"]["difficulty"] | null
          equipment?: Database["public"]["Enums"]["equipment"] | null
          exercise_type?: Database["public"]["Enums"]["exercise_type"] | null
          force_type?: Database["public"]["Enums"]["force_type"] | null
          id?: number
          mechanics?: Database["public"]["Enums"]["mechanics"] | null
          name?: string | null
          secondary_muscles?:
            | Database["public"]["Enums"]["muscle_group"][]
            | null
          target_muscle_group?:
            | Database["public"]["Enums"]["muscle_group"]
            | null
        }
        Update: {
          created_at?: string
          difficulty?: Database["public"]["Enums"]["difficulty"] | null
          equipment?: Database["public"]["Enums"]["equipment"] | null
          exercise_type?: Database["public"]["Enums"]["exercise_type"] | null
          force_type?: Database["public"]["Enums"]["force_type"] | null
          id?: number
          mechanics?: Database["public"]["Enums"]["mechanics"] | null
          name?: string | null
          secondary_muscles?:
            | Database["public"]["Enums"]["muscle_group"][]
            | null
          target_muscle_group?:
            | Database["public"]["Enums"]["muscle_group"]
            | null
        }
        Relationships: []
      }
      workout_exercise_sets: {
        Row: {
          created_at: string
          id: number
          repetitions: number | null
          time: number | null
          workout_exercise_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          repetitions?: number | null
          time?: number | null
          workout_exercise_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          repetitions?: number | null
          time?: number | null
          workout_exercise_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_workout_exercise_sets_workout_exercise_id_fkey"
            columns: ["workout_exercise_id"]
            isOneToOne: false
            referencedRelation: "workout_exercises"
            referencedColumns: ["id"]
          },
        ]
      }
      workout_exercises: {
        Row: {
          created_at: string
          exercise_id: number | null
          id: number
          workout_id: number | null
        }
        Insert: {
          created_at?: string
          exercise_id?: number | null
          id?: number
          workout_id?: number | null
        }
        Update: {
          created_at?: string
          exercise_id?: number | null
          id?: number
          workout_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_exercises_to_workout_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_exercises_to_workout_workout_id_fkey"
            columns: ["workout_id"]
            isOneToOne: false
            referencedRelation: "workouts"
            referencedColumns: ["id"]
          },
        ]
      }
      workouts: {
        Row: {
          created_at: string
          description: string
          difficulty: Database["public"]["Enums"]["difficulty"]
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          description?: string
          difficulty?: Database["public"]["Enums"]["difficulty"]
          id?: number
          name?: string
        }
        Update: {
          created_at?: string
          description?: string
          difficulty?: Database["public"]["Enums"]["difficulty"]
          id?: number
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      difficulty: "beginner" | "intermediate" | "advanced"
      equipment:
        | "bodyweight"
        | "dumbbell"
        | "barbell"
        | "cables"
        | "machine"
        | "ez_bar"
        | "kettlebell"
        | "trx"
        | "other"
      exercise_type: "strength" | "cardio" | "stretch" | "balance"
      force_type: "push" | "pull" | "hinge" | "static"
      mechanics: "compound" | "isolation" | "isometric"
      muscle_group:
        | "lats"
        | "chest"
        | "shoulders"
        | "traps"
        | "glutes"
        | "quads"
        | "hamstrings"
        | "hip flexors"
        | "adductors"
        | "calves"
        | "abs"
        | "biceps"
        | "triceps"
        | "forearms"
        | "upper back"
        | "lower back"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
