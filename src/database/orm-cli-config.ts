import { DataSource } from 'typeorm'
import { dataSourceOptions } from './database.module'
import { CreateCoursesTable1694705312546 } from 'src/migrations/1716661926777-CreateCoursesTable'
import { CreateTagsTable1694706531026 } from 'src/migrations/1716662506251-CreateTagsTable'
import { CreateCoursesTagsTable1695042750118 } from 'src/migrations/1716663143340-CreateCoursesTagsTable'
import { AddCoursesIdToCoursesTagsTable1695043757120 } from 'src/migrations/1716663360319-AddCoursesIdToCoursesTagsTable'
import { AddTagsIdToCoursesTagsTable1695044746630 } from 'src/migrations/1716663676888-AddTagsIdToCoursesTagsTable'

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