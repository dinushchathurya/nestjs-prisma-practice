import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BooksService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Book[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__BookClient<import(".prisma/client").Book>;
    create(createBookDto: CreateBookDto): import(".prisma/client").Prisma.Prisma__BookClient<import(".prisma/client").Book>;
    update(id: number, updateBookDto: UpdateBookDto): import(".prisma/client").Prisma.Prisma__BookClient<import(".prisma/client").Book>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__BookClient<import(".prisma/client").Book>;
}
