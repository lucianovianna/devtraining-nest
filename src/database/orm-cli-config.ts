import { DataSource } from 'typeorm'
import { dataSourceOptions } from './database.module'
import { CreateCoursesTable1694705312546 } from 'src/migrations/1716661926777-CreateCoursesTable'
import { CreateTagsTable1694706531026 } from 'src/migrations/1716662506251-CreateTagsTable'

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1694705312546,
    CreateTagsTable1694706531026
  ],
})