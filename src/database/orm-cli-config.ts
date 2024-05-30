import 'dotenv/config'
import { DataSource, DataSourceOptions } from 'typeorm'
import { CreateCoursesTable1694705312546 } from 'src/migrations/1716661926777-CreateCoursesTable'
import { CreateTagsTable1694706531026 } from 'src/migrations/1716662506251-CreateTagsTable'
import { CreateCoursesTagsTable1695042750118 } from 'src/migrations/1716663143340-CreateCoursesTagsTable'
import { AddCoursesIdToCoursesTagsTable1695043757120 } from 'src/migrations/1716663360319-AddCoursesIdToCoursesTagsTable'
import { AddTagsIdToCoursesTagsTable1695044746630 } from 'src/migrations/1716663676888-AddTagsIdToCoursesTagsTable'
import { Course } from 'src/courses/entities/courses.entity'
import { Tag } from 'src/courses/entities/tags.entity'

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
}

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1694705312546,
    CreateTagsTable1694706531026,
    CreateCoursesTagsTable1695042750118,
    AddCoursesIdToCoursesTagsTable1695043757120,
    AddTagsIdToCoursesTagsTable1695044746630
  ],
})