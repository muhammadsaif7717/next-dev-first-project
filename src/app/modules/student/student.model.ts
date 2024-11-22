import { Schema, model } from 'mongoose';
// import validator from 'validator';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required.'],
    maxlength: [50, 'First name cannot exceed 50 characters.'],
    minlength: [2, 'First name must be at least 2 characters long.'],
    trim: true,
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        //Saif
        return firstNameStr === value;
      },
      message: '{VALUE} is not capitalized formet | Example: Jhon',
    },
  },
  middleName: {
    type: String,
    maxlength: [50, 'Middle name cannot exceed 50 characters.'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required.'],
    maxlength: [50, 'Last name cannot exceed 50 characters.'],
    minlength: [2, 'Last name must be at least 2 characters long.'],
    trim: true,
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    //   message: '{VALUE} is not valid'
    // }
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required."],
    maxlength: [50, "Father's name cannot exceed 50 characters."],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required."],
    maxlength: [50, "Father's occupation cannot exceed 50 characters."],
    trim: true,
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required."],
    minlength: [
      10,
      "Father's contact number must be at least 10 characters long.",
    ],
    maxlength: [15, "Father's contact number cannot exceed 15 characters."],
    trim: true,
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required."],
    maxlength: [50, "Mother's name cannot exceed 50 characters."],
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required."],
    maxlength: [50, "Mother's occupation cannot exceed 50 characters."],
    trim: true,
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required."],
    minlength: [
      10,
      "Mother's contact number must be at least 10 characters long.",
    ],
    maxlength: [15, "Mother's contact number cannot exceed 15 characters."],
    trim: true,
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, "Local guardian's name is required."],
    maxlength: [50, "Local guardian's name cannot exceed 50 characters."],
    trim: true,
  },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required."],
    maxlength: [50, "Local guardian's occupation cannot exceed 50 characters."],
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required."],
    minlength: [
      10,
      "Local guardian's contact number must be at least 10 characters long.",
    ],
    maxlength: [
      15,
      "Local guardian's contact number cannot exceed 15 characters.",
    ],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required."],
    maxlength: [100, "Local guardian's address cannot exceed 100 characters."],
    trim: true,
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'Student ID is required.'],
    unique: true,
    minlength: [5, 'Student ID must be at least 5 characters long.'],
    maxlength: [20, 'Student ID cannot exceed 20 characters.'],
    trim: true,
  },
  name: {
    type: userNameSchema,
    required: [true, 'Student name is required.'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not a valid gender.',
    },
    required: [true, 'Gender is required.'],
    trim: true,
  },
  dateOfBirth: {
    type: String,
    required: [true, 'Date of birth is required.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email address is required.'],
    unique: true,
    maxlength: [100, 'Email cannot exceed 100 characters.'],
    trim: true,
    // validate: {
    //   validator: (value: string) => validator.isEmail(value),
    //   message: '{VALUE} is not valid'
    // }
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required.'],
    minlength: [10, 'Contact number must be at least 10 characters long.'],
    maxlength: [15, 'Contact number cannot exceed 15 characters.'],
    trim: true,
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required.'],
    minlength: [
      10,
      'Emergency contact number must be at least 10 characters long.',
    ],
    maxlength: [15, 'Emergency contact number cannot exceed 15 characters.'],
    trim: true,
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group.',
    },
    required: [true, 'Blood group is required.'],
    trim: true,
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required.'],
    maxlength: [100, 'Present address cannot exceed 100 characters.'],
    trim: true,
  },
  parmanentAddress: {
    type: String,
    required: [true, 'Permanent address is required.'],
    maxlength: [100, 'Permanent address cannot exceed 100 characters.'],
    trim: true,
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required.'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian information is required.'],
  },
  profileImage: {
    type: String,
    required: [true, 'Profile image is required.'],
    maxlength: [200, 'Profile image URL cannot exceed 200 characters.'],
    trim: true,
  },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: '{VALUE} is not a valid status.',
    },
    default: 'active',
    required: [true, 'Status is required.'],
    trim: true,
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
