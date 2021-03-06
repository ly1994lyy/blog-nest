import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Article } from 'libs/db/models/article.model';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';

@Controller('articles')
@Crud({
    model:Article
})
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@ApiTags('文章')
export class ArticlesController {
    constructor(
        @InjectModel(Article) private model:ReturnModelType<typeof Article>
    ){}
}
