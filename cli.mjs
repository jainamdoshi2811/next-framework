import fs from 'fs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const resource = process.argv[2];
const resourceName = resource.charAt(0).toUpperCase() + resource.slice(1);

// create model file
try {
    const content = `import mongoose, { Schema } from 'mongoose';
// imports

const ${resourceName}Schema = new Schema({
    // define schema
});

export default mongoose.model('${resourceName}', ${resourceName}Schema, '${resource}s');`;
    
    fs.writeFile(__dirname + '/models/' + resourceName + 'Model.ts', content, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('created model successfully');
        }
    });
} catch (error) {
    console.log(error);
}

// create controller file
try {
    const content = `import { Request, Response } from "express";
import ${resourceName} from "../models/${resourceName}Model";
    
const ${resourceName}Controller = {
    async get${resourceName}(req: Request, res: Response) {
        await ${resourceName}.find({})
            .then(data => {
                res.json(data);
            });
    },
    async get${resourceName}ById(req: Request, res: Response) {
        await ${resourceName}.findById(req.params.id)
            .then(data => {
                res.json(data);
            });
    },
    async post${resourceName}(req: Request, res: Response) {
        await ${resourceName}.create({ ...req.body })
            .then(data => {
                res.json(data);
            });
    },
    async put${resourceName}(req: Request, res: Response) {
        await ${resourceName}.findByIdAndUpdate(req.params.id, { ...req.body })
            .then(data => {
                res.json(data);
            });
    },
    async delete${resourceName}(req: Request, res: Response) {
        await ${resourceName}.findByIdAndDelete(req.params.id)
            .then(data => {
                res.json(data);
            });
    }
};
    
export default ${resourceName}Controller;`;
    
    fs.writeFile(__dirname + '/controllers/' + resourceName + 'Controller.ts', content, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('created controller successfully');
        }
    });
} catch (error) {
    console.log(error);
}

// create route file
try {
    const content = `import { Router } from 'express';
import ${resourceName}Controller from '../controllers/${resourceName}Controller';
    
const ${resourceName}Routes = Router();
    
${resourceName}Routes.get('/', ${resourceName}Controller.get${resourceName});
${resourceName}Routes.get('/:id', ${resourceName}Controller.get${resourceName}ById);
${resourceName}Routes.post('/', ${resourceName}Controller.post${resourceName});
${resourceName}Routes.put('/:id', ${resourceName}Controller.put${resourceName});
${resourceName}Routes.delete('/:id', ${resourceName}Controller.delete${resourceName});
    
export default ${resourceName}Routes;`;
    
    fs.writeFile(__dirname + '/routes/' + resourceName + 'Routes.ts', content, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('created routes successfully');
        }
    });
} catch (error) {
    console.log(error);
}
