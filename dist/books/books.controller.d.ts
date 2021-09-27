import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): import(".prisma/client").Prisma.Prisma__BookClient<import(".prisma/client").Book>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Book[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__BookClient<import(".prisma/client").Book>;
    update(id: string, updateBookDto: UpdateBookDto): import(".prisma/client").Prisma.Prisma__BookClient<import(".prisma/client").Book>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__BookClient<import(".prisma/client").Book>;
}
